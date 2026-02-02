# Builder Pattern

The Builder pattern allows you to construct complex objects step by step. Instead of using a constructor with many parameters, you use a fluent interface where methods can be chained together to configure the object before building it.

## Benefits

- **Flexible construction**: Only set the properties you need
- **Readable code**: Method names make the code self-documenting
- **Fluent interface**: Chain methods together for a clean API
- **Separation of concerns**: The product class (`Boat`) and builder class (`BoatBuilder`) are separate

## Boat Class

The `Boat` class is the product being built. It has a constructor that accepts all boat properties (motors, sails, hull color, cabin, etc.). This class represents the final boat object.

## BoatBuilder Class

The `BoatBuilder` class provides a fluent interface to construct `Boat` instances. You can configure various boat features:

- **Motors**: `withMotors(count, brand, model)` - Add motor(s) with specifications
- **Sails**: `withSails(count, material, color)` - Add sail(s) with details
- **Hull**: `hullColor(color)` - Set the hull color
- **Cabin**: `withCabin()` - Add a cabin to the boat

Each method returns `this`, allowing you to chain methods together. Call `build()` at the end to create the final `Boat` instance.

## Example

```javascript
const myBoat = new BoatBuilder()
    .withMotors(2, 'Mercury', '400')
    .withSails(1, 'Nylon', 'Red')
    .hullColor('Blue')
    .withCabin()
    .build()
```

This creates a boat with 2 Mercury 400 motors, 1 red Nylon sail, a blue hull, and a cabin.
