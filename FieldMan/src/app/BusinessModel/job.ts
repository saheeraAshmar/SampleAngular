//USE INTERFACE FOR OPTIONAL property
export class Job { 
  constructor(public jobId: string, public jobDescription: string, public ConstructionManager: string,  public ForeMan:string,public IsCertifiedJob: boolean) { }
}