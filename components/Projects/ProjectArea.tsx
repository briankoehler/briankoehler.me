import { Project } from "../types"
import ProjectInfo from "./ProjectInfo"


type ProjectAreaProps = {
    projects: Project[]
}

const ProjectArea = ({ projects }: ProjectAreaProps) => {
    return (
        <div>
            {
                projects.map((project: Project, index: number) => <ProjectInfo key={index} {...project} />)
            }
        </div>
    )
}

export default ProjectArea
