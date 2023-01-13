class Music{
    constructor(title, singer, img, file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }

}

const musicList = [
    new Music ("Raise Hell","Dorothy", "dorothy.jpg", "Dorothy_Raise-Hell.mp3"),
    new Music ("Wicked Ones", "Dorothy","dorothy.jpg", "Dorothy_Wicked-Ones.mp3"),
    new Music ("Make Me Wanna Die", "The Pretty Reckless","the_pretty_Reckless.jpg", "The Pretty Reckless _Make Me Wanna Die.mp3"),
    new Music ("Just Tonight", "The Pretty Reckless","the_pretty_Reckless.jpg", "The Pretty Reckless_Just Tonight.mp3"),
    new Music ("Take Me Down", "DorThe Pretty Recklessothy","the_pretty_Reckless.jpg", "The Pretty Reckless_Take-Me-Down.mp3")

]