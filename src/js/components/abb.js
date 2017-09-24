"use strict";
exports.__esModule = true;
var Node = (function () {
    function Node(elm) {
        this.elm = elm;
    }
    Node.prototype.insert = function (elm, attr) {
        if (elm) {
            if (elm[attr]) {
                if (elm[attr] < this.elm.name) {
                    return this.insertLeft(elm, attr);
                }
                else {
                    return this.insertRight(elm, attr);
                }
            }
        }
    };
    Node.prototype.insertLeft = function (elm, attr) {
        if (this.left) {
            return this.left.insert(elm, attr);
        }
        else {
            this.left = new Node({ name: elm[attr], domElm: elm });
            return this.left;
        }
    };
    Node.prototype.insertRight = function (elm, attr) {
        if (this.right) {
            return this.right.insert(elm, attr);
        }
        else {
            this.right = new Node({ name: elm[attr], domElm: elm });
            return this.right;
        }
    };
    return Node;
}());
exports.Node = Node;
function init() {
    var root;
    var attr = 'tagName';
    function rootObj(data, attr) {
        if (!root) {
            root = new Node({ name: data[attr], domElm: data });
        }
        return root;
    }
    function saveDom() {
        var body_children = document.body.children;
        var first = true;
        for (var i in body_children) {
            if (first) {
                root = rootObj(body_children[i], attr);
                first = false;
            }
            if (!isNaN(+i)) {
                saveDomAbb(body_children[i]);
                root.insert(body_children[i], attr);
            }
        }
        console.log(root);
    }
    function saveDomAbb(elm) {
        try {
            root = rootObj(null, null);
            root.insert(elm, attr);
            var children = elm.children;
            if (children && children.length) {
                for (var i in children) {
                    saveDomAbb(children[i]);
                    /* console.log(i, children, children[i]); */
                }
            }
        }
        catch (error) {
            /* console.log(error.message); */
        }
    }
    saveDom();
}
exports["default"] = init;
