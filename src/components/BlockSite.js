import 'bootstrap/dist/css/bootstrap.min.css';
import Block from './Block';
import projectsData from '../content/projects.json';

function BlockSite() {

    const allProjects = projectsData.projects
    console.log(allProjects)

    return (
        <div className="BlockSite">
            {allProjects.map((proj) => (
                <Block name={proj.name} desc={proj.desc} repo={proj.repo} play={proj.checkout} tags={proj.tags} gif={proj.gif} />
            ))}
        </div>
    );
}

export default BlockSite;
