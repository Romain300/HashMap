export class LinkedList {
    constructor() {
        this.Head = null;
    };


    append(key, value) {
        const newNode = new Node(key, value);
        if(this.Head === null) {
            this.Head = newNode;
            return;
        } else {
            checkTail(this.Head);
        }
    
        //checking where is the tail to add node at the end of the list
        function checkTail(node) {
            if (node.nextNode === null) {
                node.nextNode = newNode;
                return;
            } else {
                checkTail(node.nextNode);
            };
        }
    };


    prepend(key, value) {
        const newNode = new Node(key, value);
        if(this.Head === null) {
            this.Head = newNode;
        } else {
            const currentHead = this.Head;
            newNode.nextNode = currentHead;
            this.Head = newNode;
        };
    }


    size() {
        let i = 0;
        if(this.Head === null) {
            return 0;
        } else {
            return checkEnd(this.Head);
        };

        //checking tail and i incrementation
        function checkEnd(node) {
            if (!node) {
                return i;
            } else {
                i++;
                return checkEnd(node.nextNode);
            }; 
        };
    };


    head() {
        return this.Head;
    };


    
    tail() {
        if(this.Head === null) {
            return this.Head;
        } else {
            return findTail(this.Head);
        }
        
        
        function findTail(node) {
            if(node.nextNode === null) {
                return node;
            } else {
                return findTail(node.nextNode)
            }
        };
    };


    at(index) {
        let node = this.Head;
        let i = 1;

        while(node) {
            if(i === index) return node;
            node = node.nextNode;
            i++;
        };

        return null;
    };


    pop() {
        if(this.Head === null || !this.Head.nextNode) {
            this.Head = null;
            return;
        } else {
            const newLastElement = this.at(this.size() - 1);
            newLastElement.nextNode = null
        };        
    };

    
    contains(value) {
        return checkValueNode(this.Head);

        function checkValueNode(node) {
            if(node) {
                if (node.value == value) {
                    return true;
                 } else {
                    return checkValueNode(node.nextNode)
                 };
            } else {
                return false;
            }      
        } ;
    };

    containsKey(key) {
        if (this.Head === null) return false;

        let node = this.Head;

        while(node) {
            if(node.key === key) return true;
            node = node.nextNode;
        };

        return false;
    }

    findKey(key) {
        if (this.Head === null) return null;

        let node = this.Head
        let index = 0;

        while(node) {
            index++;
            if(node.key === key) return index;
            node = node.nextNode;
        };

        return null;
    }


    find(value) {
        let i = 0;
        return checkValueEqual(this.Head);

        function checkValueEqual(node) {
            if(node) {
                i++
                if(node.value == value) {
                    return i;
                } else {
                    return checkValueEqual(node.nextNode);
                }
            } else {
                return null;
            }
        };
    };


    toString() {

        let stringValue = "";
        const head = this.Head;
        if(this.Head !== null) {
            return concatValue(this.Head);
        } else {
            return null;
        }
        

        function concatValue(node) {
            if(node && node === head) {
                stringValue = stringValue.concat("", `( ${node.value} )`);
                return concatValue(node.nextNode) ;
            } else if(node && node.nextNode !== null) {
                stringValue = stringValue.concat(" -> ", `( ${node.value} )`);
                return concatValue(node.nextNode) ;
            } else if(node && node.nextNode === null) {
                stringValue = stringValue.concat(" -> ", `( ${node.value} ) -> null`);
                return concatValue(node.nextNode) ;
            } else {
                return stringValue;
            }    
        };
    };


    removeAt(index) {
        if (this.Head === null || index < 1) return null;

        let node = this.Head;
        let previousNode = null;
        let i = 1;

        if(index === 1) {
            this.Head = node.nextNode;
            return true
        };

        while(node) {
            if(index === i) {
                previousNode.nextNode = node.nextNode;
                return true;
            }

            i++;
            previousNode = node;
            node = node.nextNode;
        };

         //If index out of bounds
        return null;
    };

    keys() {
        const listKeys = [];
        let node = this.Head;

        if (node === null) return listKeys;

        while(node) {
            listKeys.push(node.key);
            node = node.nextNode;
        };

        return listKeys;     
    };


    values() {
        const listValues = [];
        let node = this.Head;

        if (node === null) return listValues;

        while(node) {
            listValues.push(node.value);
            node = node.nextNode;
        };

        return listValues;     
    };

    keysValues() {
        const listKeysValues = [];
        let node = this.Head;

        if (node === null) return listKeysValues;

        while(node) {
            listKeysValues.push([node.key, node.value]);
            node = node.nextNode;
        };

        return listKeysValues; 
    };
};


class Node {
    constructor(key, value) {
        this.value = value;
        this.key = key;
        this.nextNode = null;
    };
};


// example
const list = new LinkedList();
list.append("fewfewf","dog");
list.append("dwd","cat");
list.append("dwedweq","parrot");
list.append("dweqdweq","hamster");
list.append("dwqe","snake");
list.append("dqwd","turtle");









