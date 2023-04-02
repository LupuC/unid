
# unid
A public TypeScript library to generate UUIDs. You can generate UUID4 and UUID5.


## Installation

Install unid with

```bash
  npm install @lupucl/unid
```
```bash
  yarn add @lupucl/unid (soon)
```
## Usage/Examples

Generating UUIDs

```javascript
import { unid } from '@lupucl/unid;

// Generating UUID4
const uuid4 = unid.generate4(); // e.g. 'd6339023-aa8e-4c52-a53d-f3f3f913b8c5'

// Generating UUID5
const name = 'Hello, world!';
// unid.generate5(namespace, name)
const uuid5 = unid.generate5(uuid4, name); //e.g 'cd6366d4-01cd-5948-97a2-3309017638fc'

// Generating UNID1
const unid1 = unid.v1(); //e.g '4de338f09b7f-19788-d2a75-259c-9b9a4f42c99c'
```

Validating a UUID/ UNID
```javascript
//UUID4, UUID5 & UNID1
const isValid = unid.check(UUID); // true, can use UUID4, UUID5 and UNID1
const isInvalid = uuid.check('not-a-uuid'); // false
```

## UUID Version 4:
UUID Version 4, also known as a random UUID, is a type of UUID that is generated using random numbers. According to the RFC 4122 specification, the UUID format consists of a randomly generated 128-bit value, which is then represented as a sequence of 32 hexadecimal digits, separated by hyphens into five groups. Version 4 UUIDs are designed to have a very low probability of collisions between two generated UUIDs.

## UUID Version 5:
UUID Version 5, also known as a name-based UUID, is a type of UUID that is generated using a hash function based on a namespace and a name. According to the RFC 4122 specification, a UUID Version 5 is created by applying a SHA-1 hash function to a namespace UUID and a name. The resulting hash value is then used to generate a new UUID with a format similar to other UUID versions. UUID Version 5 is useful when a unique identifier is needed for a specific name within a particular namespace.


## UNID Version 1 (new)
UNIDv1 is a unique identifier generator that produces a unique string of 38 characters, with a format of xxxxxxxxxxxx-1xxxx-xxxxx-xxxx-xxxxxxxxxxxx. Unlike UUIDs, UNIDs are not based on a standardized algorithm. Instead, they use a combination of the current time, a cryptographically secure random number generator, and a fixed prefix and suffix to generate a unique string. UNIDs are designed to be more secure than UUIDs because they use a cryptographically secure random number generator, which makes it much more difficult for an attacker to predict the next value in the sequence. UNIDs are useful when a unique identifier is needed for a specific application or use case.


## License

This library is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

