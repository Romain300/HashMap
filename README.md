# HashMap Implementation

A basic implementation of a HashMap in JavaScript using separate chaining (linked list) to handle collisions. The `HashMap` supports common methods like `set`, `get`, `has`, `remove`, and dynamic resizing when the load factor is exceeded.

## Features
- **Collision Handling**: Uses a linked list to handle key collisions.
- **Dynamic Resizing**: Doubles the size of the hashmap when the load factor exceeds a certain threshold (default 0.75).
- **Key-Value Storage**: Allows for storing and retrieving key-value pairs.

## Methods
- `set(key, value)` – Inserts or updates a key-value pair.
- `get(key)` – Retrieves the value for a given key.
- `has(key)` – Checks if a key exists.
- `remove(key)` – Removes a key-value pair.
- `length()` – Returns the number of stored key-value pairs.
- `clear()` – Clears all entries.
- `keys()` – Returns an array of all keys.
- `values()` – Returns an array of all values.
- `entries()` – Returns an array of key-value pairs.

## Example Usage

```javascript
import { HashMap } from './HashMap.js';

const map = new HashMap();

map.set('name', 'John');
console.log(map.get('name')); // Output: 'John'

map.set('age', 30);
console.log(map.keys()); // Output: ['name', 'age']
console.log(map.values()); // Output: ['John', 30]

map.remove('name');
console.log(map.get('name')); // Output: null
```

### Licence

MIT License