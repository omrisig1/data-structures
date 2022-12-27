"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var LinkedNode = /** @class */ (function () {
    function LinkedNode(d) {
        this.data = d;
        this.next = null;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.insertToLinkedList = function (list, data) {
        var new_node = new LinkedNode(data);
        new_node.next = null;
        if (list.head == null) {
            list.head = new_node;
        }
        else {
            var last = list.head;
            while (last.next != null) {
                last = last.next;
            }
            last.next = new_node;
        }
        return list;
    };
    LinkedList.prototype.printList = function (list) {
        var currNode = list.head;
        if (currNode) {
            console.log(currNode.data + ' ');
        }
        while (currNode.next != null) {
            currNode = currNode.next;
            console.log(currNode.data + ' ');
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
