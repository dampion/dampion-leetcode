
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        const popNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = popNode.prev
            this.tail.next = null
            popNode.prev = null
        }
        this.length--
        return popNode
    }

    shift() {
        if (!this.head) return undefined
        const shiftNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = shiftNode.next
            this.head.prev = null
            shiftNode.next = null
        }
        this.length--
        return shiftNode
    }

    unshift(val) {
        let unshiftNode = new Node(val)
        if (this.length === 0) {
            this.head = unshiftNode
            this.tail = unshiftNode
        } else {
            this.head.prev = unshiftNode
            unshiftNode.next = this.head
            this.head = unshiftNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        } else {
            if (index === 0) return this.head
            if (index === this.length - 1) return this.tail
            if (index <= this.length / 2) {
                let count = 0
                let current = this.head
                while (index !== count) {
                    count++
                    current = current.next
                }
            } else {
                let count = this.length - 1
                let current = this.tail
                while (index !== count) {
                    count--
                    current = current.prev
                }
            }
            return current
        }
    }

    set(val, index) {
        let setNode = this.get(index)
        if (!setNode) return false
        let node = new Node(val)
        setNode.val = node
        return true
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        } else {
            let insertNode = new Node(val)
            if (index === 0) {
                return !!this.unshift(val)
            } else if (index === this.length) {
                return !!this.push(val)
            } else {
                let afterNode = this.get(index)
                let beforeNode = afterNode.prev
                insertNode.next = afterNode
                insertNode.prev = beforeNode
                afterNode.prev = insertNode
                beforeNode.next = insertNode
            }
            this.length++
            return true
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false
        } else {
            if (index === 0) {
                return !!this.shift(index)
            } else if (index === this.length - 1) {
                return !!this.pop(index)
            } else {
                let removal = this.get(index)
                let afterNode = removal.next
                let beforeNode = removal.prev
                beforeNode.next = afterNode
                afterNode.prev = beforeNode
                removal.prev = null
                removal.next = null
                this.length--
                return removal
            }
        }
    }
    
    reverse() {
        if (this.length <= 1) return this
        let next = null
        let beforeNode = null
        let current = this.head[this.head, this.tail] = [this.tail, this.head]
        for (i = 0; i < this.length; i++) {
            [current.next, current.prev] = [current.prev, current.next]
            current = current.next
        }

        return this
    }
}
