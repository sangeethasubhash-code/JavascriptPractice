//abstraction-showing only essential features and hidding the internal
class Drive {
    start()
    {
        this.#enginestart();
        console.log('Drive Started')
    }
    #enginestart(){
        console.log("Engine started")
    }
}
    let d = new Drive();
    d.start()
    d.#enginestart()