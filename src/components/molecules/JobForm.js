import React                   from 'react';
import Input                   from '../atoms/Input';
import Textarea                from '../atoms/Textarea';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const JobForm = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeQuestion:  1,
            totalQuestions:  5,
            formData:        {},
        }

        this._onNextClick       = this._onNextClick.bind(this);
        this._onBackClick       = this._onBackClick.bind(this);
        this._onSubmitClick     = this._onSubmitClick.bind(this);
        this._caclulateProgress = this._caclulateProgress.bind(this);
        this._setInputValue     = this._setInputValue.bind(this);
    }

    _onNextClick() {
        if (this.state.activeQuestion === this.state.totalQuestions) {
            this._caclulateProgress(1);
            return;
        }

        this.setState({
            activeQuestion:  this.state.activeQuestion + 1,
        }, this._caclulateProgress(1));
    }

    _onBackClick() {
        if (this.state.activeQuestion === 1) {
            this._caclulateProgress(0);
            return;
        }

        this.setState({
            activeQuestion:  this.state.activeQuestion  - 1,
        }, this._caclulateProgress(0));
    }

    _onSubmitClick(e) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-job", ...this.state.formData })
        })
            .then(() =>
                this._caclulateProgress(1)
            )
            .catch(error => alert(error));

        e.preventDefault();
    }

    _validateFormData() {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.activeQuestion === 1 && this.state.formData.name && this.state.formData.name !== "") {
            return false;
        }

        if (this.state.activeQuestion === 2 && this.state.formData.email && this.state.formData.email !== "" && pattern.test(this.state.formData.email)) {
            return false;
        }

        if (this.state.activeQuestion === 3 && this.state.formData.phone && this.state.formData.phone !== "") {
            return false;
        }

        return true;
    }

    _caclulateProgress(direction) {
        let percentComplete = this.state.activeQuestion / this.state.totalQuestions * 100;
        if (this.state.activeQuestion === this.state.totalQuestions && direction === 1) {
            this.props.isSubmittedCallback(true);
        }

        if (this.state.activeQuestion === 1 && direction === 0) {
            this.props.isSubmittedCallback(false);
        }

        if (direction === 0) {
            percentComplete = (this.state.activeQuestion - 2) / this.state.totalQuestions * 100;
        }

        this._sendData(percentComplete);
    }

    _sendData(percentComplete) {
        this.props.progressCallback(percentComplete);
    }

    _setInputValue(name, value) {
        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    render() {
        let formClass   = 'o-contact-form';
        formClass += this.props.isActive ? ' -active' : '';

        let buttonClass = 'a-button';
        buttonClass += this.props.lightTheme ? ' -light ' : '';

        let nextButtonClass = 'a-button';
        formClass += this.props.isActive ? ' -active' : '';

        if (this.state.activeQuestion === this.state.totalQuestions) {
            buttonClass += ' -active'
        }

        if (this._validateFormData()) {
            nextButtonClass += ' -disabled'
        }

        nextButtonClass += this.props.lightTheme ? ' -light ' : '';

        return (
            <form className = { formClass } name = "contact-job" method = "POST" data-netlify = "true">
                <div className = "o-rhythm__container">
                    <div className = "o-contact-form__wrapper">
                        <header aria-label="Job form header">join the team</header>
                        <Input
                            className          = { this.state.activeQuestion === 1 ? '-active': '' }
                            description        = "Enter your name for the job form submission"
                            type               = "text"
                            name               = "name"
                            inputValueCallback = { this._setInputValue }
                            isRequired         = { true }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.name }
                            id                 = "job-name" />
                        <Input
                            className          = { this.state.activeQuestion === 2 ? '-active': '' }
                            description        = "Enter your email for the job form submission"
                            type               = "email"
                            name               = "email"
                            inputValueCallback = { this._setInputValue }
                            isRequired         = { true }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.email }
                            id                 = "job-email" />
                        <Input
                            className          = { this.state.activeQuestion === 3 ? '-active': '' }
                            description        = "Enter your phone number for the job form submission"
                            type               = "text"
                            name               = "phone"
                            inputValueCallback = { this._setInputValue }
                            isRequired         = { true }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.phone }
                            id                 = "job-phone" />
                        <Input
                            className          = { this.state.activeQuestion === 4 ? '-active': '' }
                            description        = "Enter your LinkedIn profile for the job form submission"
                            type               = "text"
                            name               = "linkedin_profile"
                            inputValueCallback = { this._setInputValue }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.linkedin_profile }
                            id                 = "job-linkedin-profile" />
                        <Textarea
                            className          = { this.state.activeQuestion === 5 ? '-active': '' }
                            description        = "Enter the message that you would like sent to andculture for the job form submission"
                            name               = "message"
                            inputValueCallback = { this._setInputValue }
                            value              = { this.state.formData.message }
                            lightTheme         = { this.props.lightTheme }
                            id                 = "job-message" />
                        <fieldset className = { this.state.activeQuestion === 6 ? '-active': '' }>
                            <input
                                className  = "a-checkbox"
                                aria-label = "Acknowledgement that this position is located in Harrisburg, PA"
                                type       = "checkbox"
                                name       = "acknowledge"
                                value      = "acknowledge"
                                id         = "acknowledge"/>
                            <label
                                className = "a-label"
                                htmlFor   = "acknowledge">
                                    I acknoledge that this position is located in Harrisburg, PA
                            </label>
                        </fieldset>
                        <div className = "o-contact-form__buttons">
                            <a
                                onClick   = { this._onBackClick }
                                className = {  buttonClass }>
                                Go Back
                            </a>
                            {  // if
                                this.state.activeQuestion !== this.state.totalQuestions &&
                                <a
                                    onClick   = { this._onNextClick }
                                    className = { nextButtonClass }>
                                    Next
                                </a>
                            }
                            <button
                                type      = "submit"
                                onClick   = { this._onSubmitClick }
                                className = {  buttonClass }>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default JobForm
