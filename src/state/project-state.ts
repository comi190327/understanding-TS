import { Project, ProjectStatus } from "../models/project.js";

// Project State Management
type listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: listener<T>[] = [];
  addListener(linstenerFn: listener<T>) {
    this.listeners.push(linstenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, manday: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      manday,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const linstenerFn of this.listeners) {
      linstenerFn(this.projects.slice());
    }
  }
}

console.log("実行中．．．");

export const projectState = ProjectState.getInstance();
