
# unid
A public TypeScript library to generate UUIDs. You can generate UUID4 and UUID5.


## Installation

Install unid with

```bash
  npm install unid
```
```bash
  yarn add unid
```
## Usage/Examples

Generating UUIDs

```javascript
import { unid } from 'unid;

// Generating UUID4
const uuid4 = unid.generate4(); // e.g. 'd6339023-aa8e-4c52-a53d-f3f3f913b8c5'

// Generating UUID5
const name = 'Hello, world!';
// unid.generate5(namespace, name)
const uuid5 = unid.generate5(uuid4, name); //e.g 'cd6366d4-01cd-5948-97a2-3309017638fc'
```

Validating a UUID
```javascript
//UUID4 & UUID5
const isValid = unid.check(UUID); // true, can use both UUID4 and UUID5
const isInvalid = uuid.check('not-a-uuid'); // false
```

## UUID Version 4:
UUID Version 4, also known as a random UUID, is a type of UUID that is generated using random numbers. According to the RFC 4122 specification, the UUID format consists of a randomly generated 128-bit value, which is then represented as a sequence of 32 hexadecimal digits, separated by hyphens into five groups. Version 4 UUIDs are designed to have a very low probability of collisions between two generated UUIDs.

## UUID Version 5:
UUID Version 5, also known as a name-based UUID, is a type of UUID that is generated using a hash function based on a namespace and a name. According to the RFC 4122 specification, a UUID Version 5 is created by applying a SHA-1 hash function to a namespace UUID and a name. The resulting hash value is then used to generate a new UUID with a format similar to other UUID versions. UUID Version 5 is useful when a unique identifier is needed for a specific name within a particular namespace.
## License

This library is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

