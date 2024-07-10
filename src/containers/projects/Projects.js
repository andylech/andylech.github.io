import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Projects.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContext because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="section-div" id="openSource">
          <div className="open-source-content-div">
            <h1 className="section-title">Open Source Projects</h1>
            <div className="repo-cards-div">
              {repo.map((v, i) => {
                if (!v) {
                  console.error(
                    `Github Object for repository number : ${i} is undefined`
                  );
                }
                return (
                  <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
                );
              })}
            </div>
            <Button
              text={"More Projects"}
              className="project-button"
              href={socialMediaLinks.github}
              newTab={true}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
