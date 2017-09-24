interface ElmAbb {
  name: string,
  domElm: any
}

export class Node {

  elm: ElmAbb;
  left: Node;
  right: Node;

  constructor(elm: ElmAbb) {
    this.elm = elm;
  }

  insert(elm: any, attr: string) {
    if(elm) {
      if(elm[attr]) {

        if(elm[attr] < this.elm.name) {
          return this.insertLeft(elm, attr);
        } else {
          return this.insertRight(elm, attr);
        }
      }
    }
  }

  private insertLeft(elm: any, attr: string) {
    if(this.left) {
      return this.left.insert(elm, attr);
    } else {
      this.left = new Node({name: elm[attr], domElm: elm});
      return this.left;
    }
  }

  private insertRight(elm: any, attr: string) {
    if(this.right) {
      return this.right.insert(elm, attr);
    } else {
      this.right = new Node({name: elm[attr], domElm: elm});
      return this.right;
    }
  }

}

export default function init() {

  let root: Node;
  let attr = 'tagName';

  function rootObj(data, attr) {
    if(!root) {
      root = new Node({name: data[attr], domElm: data});
    }
    return root;
  }

  function saveDom() {

    let body_children = document.body.children;
    let first = true;
    for(let i in body_children) {
      if(first) {
        root = rootObj(body_children[i], attr);
        first = false;
      }
      if(!isNaN(+i)) {
        saveDomAbb(body_children[i]);
        root.insert(body_children[i], attr);
      }
    }
    console.log(root);
  }

  function saveDomAbb(elm: any) {

    try {

      root = rootObj(null, null);
      root.insert(elm, attr)
      let children = elm.children;
      if(children && children.length) {

        for(let i in children) {
          saveDomAbb(children[i])
          /* console.log(i, children, children[i]); */
        }
      }
    } catch (error) {
      /* console.log(error.message); */
    }
  }

  saveDom();
}
