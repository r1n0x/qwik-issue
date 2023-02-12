function SugarObtainer() {
    console.log("Someone is trying get some sugar!");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Someone got his/her sugar!");
    };
}

class SugarProvider {
    // Try removing the decorator
    @SugarObtainer()
    public static getSpoon() {
        return "Here's your spoon of sweet white crystals"
    }
}

export default SugarProvider;