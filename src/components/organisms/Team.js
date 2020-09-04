import React from "react";
import { graphql, StaticQuery } from "gatsby";
import TeamGridMember from "components/molecules/TeamGridMember";

// Primary Component
// ------------------------------------

const Team = (props) => {
    const { data } = props;
    const { edges: employees } = data.allMarkdownRemark;

    return (
        <div className={`o-rhythm__row o-team`}>
            {employees &&
                employees.map(({ node: teamMemberGridItem }, index) => {
                    const employee = teamMemberGridItem.frontmatter;

                    return <TeamGridMember employee={employee} key={`team-grid-member-${index}`} />;
                })}
        </div>
    );
};

// Exports
// ------------------------------------

export default (props) => (
    <StaticQuery
        query={graphql`
            query EmployeeListQuery {
                allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "employee" }, position: { ne: null } } }) {
                    edges {
                        node {
                            id
                            frontmatter {
                                position
                                name
                                easterEgg
                                socialLinks {
                                    platform
                                    url
                                }
                                teamGridPhoto {
                                    image {
                                        childImageSharp {
                                            fluid(maxWidth: 1920, quality: 100) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                    description
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <Team data={data} count={count} />}
    />
);
