interface ICores {
    flight: number;
    core: {
        reuse_count: number;
        status: string;
    }
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

interface IDevice {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: string;
        video_link: string;
    },
    rocket: {
        rocket_name: string;
        first_stage: {
            cores: ICores;
        },
        second_stage: {
            payloads: IPayloads;
        }
    }
}


function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

console.log(sum(1, 2));
showSum(2, 3)


const user = {
    name:"Max",
    age:18,
    gender:'male'
}

interface IUser {
    name: string,
    age: number,
    gender: string
}

function incAge(someUser:IUser, inc: number):IUser {
    someUser.age += inc
    return someUser
}

incAge(user, 2)
