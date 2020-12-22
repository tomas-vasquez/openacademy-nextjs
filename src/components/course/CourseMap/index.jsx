import React from "react";

import SingleSeparator from "./SingleSeparator";
import SingleItem from "./SingleItem";
import FrameCollapsable from "./FrameCollapsable";

class CourseMap extends React.Component {
  constructor() {
    super();
    this.state = {
      col_0: true,
    };
  }

  recursiveRender = (index, items, tree = [], currentSection = 0) => {
    const currentItem = items[index];
    items = items.sort((a, b) => a.item_sort - b.item_sort);

    if (currentItem.item_type === "separator") {
      tree.push(
        <SingleSeparator
          key={"section-" + currentSection}
          title={currentItem.item_title}
          currentSection={currentSection}
          active={this.state["col_" + (currentSection + 1)]}
          onClick={() => {
            let key = "col_" + (currentSection + 1);
            this.setState({ [key]: !this.state[key] });
          }}
        />
      );
    } else {
      let flag = true;
      let elems = [];

      while (flag) {
        elems.push(
          <SingleItem
            key={"item-" + index}
            index={index}
            item={items[index]}
            course={this.props.course}
            currentItem={this.props.currentItem}
          />
        );

        if (!items[index + 1]) {
          flag = false;
        } else {
          if (items[index + 1].item_type === "separator") {
            flag = false;
          } else {
            index = index + 1;
          }
        }
      }

      tree.push(
        <FrameCollapsable
          key={"section-" + currentSection}
          currentSection={currentSection}
          elems={elems}
          isOpen={this.state["col_" + currentSection]}
        />
      );
    }

    if (items[index + 1]) {
      return this.recursiveRender(index + 1, items, tree, currentSection + 1);
    } else {
      return tree;
    }
  };

  render() {
    return this.props.items !== undefined && this.props.currentItem !== null ? (
      <>
        <SingleSeparator
          title={"Contenido del curso"}
          currentSection={0}
          active={this.state.col_0}
          onClick={() => {
            this.setState({ col_0: !this.state.col_0 });
          }}
        />

        {this.recursiveRender(0, this.props.items)}
      </>
    ) : null;
  }
}

export default CourseMap;
