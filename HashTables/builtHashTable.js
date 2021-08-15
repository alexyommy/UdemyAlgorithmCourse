class HashTable {
    constructor(size) {
        this.data = new Array(size);
        // ['grapes', 10000]
    }

    // Common standard for private properties is to put '_' in front of method to let other developers know not to access
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            // The charCodeAt() method returns an intefer between 0 and 65535 representing thje UTF-16 code unit at the given index.
            // We use the modulo operator to ensure the hash is within the data.length
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key,value])
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        // console.log(currentBucket)
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }   
        return undefined;
    }
    // We had to loop through the entire 50 items of the array, which makes it slow. Drawback for objects/hash tables
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

    values() {
        const valuesArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                valuesArray.push(this.data[i][0][1])
            }
        }
        return valuesArray
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'))
myHashTable.set('oranges', 2004);
myHashTable.set('apple', 34);
console.log(myHashTable.keys());
console.log(myHashTable.values());