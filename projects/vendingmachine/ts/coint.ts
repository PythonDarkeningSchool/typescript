class Quarter {
    private value: number = .25;
    // Getters and Setters
    get Value(){
        return this.value;
    }
    set Value(newValue: number){
        this.value = newValue;
    }
    // Methods
    getImageUrl (): string{
        this.value = .5;
        return "img/Quarter.png"
    }
}

let coin = new Quarter();
