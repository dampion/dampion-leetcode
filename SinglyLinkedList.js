class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (!head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    print() {
        let arr = []
        let current = head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    pop() {
        if (this.length === 0) {
            return undefined
        } else {
            let prev = null,
                current = head
            while (current.next) {
                prev = current
                current = current.next
            }
            prev.next = null
            this.tail = prev
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            return current
        }
    }
    shift() {
        if (!this.length === 0) {
            return undefined
        } else {
            let prev = head
            this.head = head.next
            this.length--
            if (this.length === 0) {
                this.tail = null
            }
            return prev
        }
    }
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        } else {
            let count = 0
            let current = this.head
            while (index > count) {
                current = current.next
                count++
            }
            return current
        }
    }
    set(val, index) {
        let getNode = this.get(index)
        if (!getNode) return false
        getNode.val = val
        return true
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            this.unshift(val)
        } else if (index === this.length) {
            this.push(val)
        } else {
            let node = new Node(val)
            let prev = this.get(index - 1)
            node.next = prev.next
            prev.next = node
            this.length++
        }
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false
        } else {
            if (index === 0) {
                this.shift()
            } else if (index === this.length - 1) {
                this.pop()
            } else {
                let prev = this.get(index - 1)
                let removeNode = prev.next
                prev.next = removeNode.next
                this.length--
                return removeNode
            }
        }
    }
    reverse() {
        if (this.length <= 1) return this
        let prev = null,
            next = null[this.head, this.tail] = [this.tail, this.head]
        let current = this.head
        for (i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
}
