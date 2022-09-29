export namespace InterfaceJobs{
    export class ResponseJobs{
        oficios!: IJobs[];
    }

    export class IJobs{
        id!: number;
        name!: string;
        description!: string;
    }
    
    export class INav{
        id!: number;
        name!: string;
        description!: string;
        slug!: string;
    }

}