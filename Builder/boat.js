class Boat {
    constructor(hasMotor, motorCount, motorBrand, motorModel,
        hasSails, sailsCount, sailsMaterial, sailsColor,
        hullColor, hasCabin) {
        this.hasMotor = hasMotor
        this.motorCount = motorCount
        this.motorBrand = motorBrand
        this.motorModel = motorModel
        this.hasSails = hasSails
        this.sailsCount = sailsCount
        this.sailsMaterial = sailsMaterial
        this.sailsColor = sailsColor
        this.hullColor = hullColor
        this.hasCabin = hasCabin
    }
}

export class BoatBuilder {
    withMotors(count, brand, model) {
        this.hasMotor = true
        this.motorCount = count
        this.motorBrand = brand
        this.motorModel = model
        return this
    }

    withSails(count, material, color) {
        this.hasSails = true
        this.sailsCount = count
        this.sailsMaterial = material
        this.sailsColor = color
        return this
    }

    hullColor(color) {
        this.hullColor = color
        return this
    }

    withCabin() {
        this.hasCabin = true
        return this
    }

    build() {
        return new Boat({
            hasMotor: this.hasMotor,
            motorCount: this.motorCount,
            motorBrand: this.motorBrand,
            motorModel: this.motorModel,
            hasSails: this.hasSails,
            sailsCount: this.sailsCount,
            sailsMaterial: this.sailsMaterial,
            sailsColor: this.sailsColor,
            hullColor: this.hullColor,
            hasCabin: this.hasCabin
        })
    }
}

// example of usage
const myBoat = new BoatBuilder()
    .withMotors(2, 'Mercury', '400')
    .withSails(1, 'Nylon', 'Red')
    .hullColor('Blue')
    .withCabin()
    .build()
