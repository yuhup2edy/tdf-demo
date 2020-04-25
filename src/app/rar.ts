export class Rar {
    constructor(
        public requestedBy : string,
        public repositoryType : string,
        public requestType : string,
        public phoneNum : number,
        public applicationName : string,
        public branchName : string,
        public versionNum : string,
        public usersList : string,
        public approvingManager : string, 
        public commentsSection : string
    ) {}
}
