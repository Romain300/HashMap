import { LinkedList } from "./LinkedList.js";

class HashMap {
    constructor(size = 16) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null);
        this.capacity = this.size;
        this.loadFactor = 0.75;
    };

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
        }
     
        return hashCode;
    };

    set(key, value) {
        const index = this.hash(key);

        if(this.buckets[index] === null) {
            this.buckets[index] = new LinkedList();
        }

        //Checking if key exist
        if(this.buckets[index].containsKey(key) === false) {
            this.buckets[index].append(key, value);
        } else {
            const keyIndex = this.buckets[index].findKey(key);
            this.buckets[index].at(keyIndex).value = value;
        }

        //checking if table needs to grow:
        const totalEntries = this.length();
        const limit = this.loadFactor * this.capacity;
        if( totalEntries > limit  ) {
            const entries = this.entries();
            this.size = (this.size * 2);
            this.capacity = this.size;
            this.buckets = new Array(this.size).fill(null);

            for (let entrie of entries) {
                this.set(entrie[0], entrie[1]);
            };
        };
    };

    get(key) {
        const index = this.hash(key);
        if (this.buckets[index] === null) return null;
        const position = this.buckets[index].findKey(key);

        if (position !== null) {
            return this.buckets[index].at(position).value;
        } else {
            return null;
        };        
    };

    has(key) {
        const index = this.hash(key);
        if (this.buckets[index] === null) return false;

        return this.buckets[index].containsKey(key);
    };

    remove(key) {
        const index = this.hash(key);
        if (this.buckets[index] === null) return false;
        const position = this.buckets[index].findKey(key);

        if(position !== null) {
            return this.buckets[index].removeAt(position);
        } else {
            return false;
        }
    };

    length() {
        let totalNodes = 0;
        for(let bucket of this.buckets) {
            if(bucket !== null) {
                totalNodes += bucket.size();
            }
        }
        return totalNodes;
    };

    clear() {
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = null;
        };
    };

    keys() {
        let listKey = [];

        for(let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== null) {
                listKey = listKey.concat(this.buckets[i].keys());
            };
        };

        return listKey;
    };

    values() {
        let listValues = [];

        for(let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== null) {
                listValues = listValues.concat(this.buckets[i].values());
            };
        };

        return listValues;
    };

    entries() {
        let totalEntries = [];

        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] !== null) {
                totalEntries = totalEntries.concat(this.buckets[i].keysValues());
            };
        };

        return totalEntries;
    }
};



const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test)
test.set('moon', 'silver')
console.log(test)
