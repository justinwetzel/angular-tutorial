export class Shiba {
    public name: string;
    public age: number;
    public weight: number;
    public gender: string;
    public coatColor: string;
    public isAdoptable: boolean;
    public imagePath: string;

    constructor(name: string, age: number, weight: number, gender: string, coatColor:string, isAdoptable:boolean, imagePath: string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
        this.coatColor = coatColor;
        this.isAdoptable = isAdoptable;
        this.imagePath = imagePath;
    }
}