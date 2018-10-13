import React from "react";
import Resource from "../components/Resource";
import { RES } from "../constants/RES";
import { IconSet } from "../models/IconSet";

export const iconSetToResources = (iconSet, uniquePrefix, otherProps) => {
  const iconSetWithGold = new IconSet();

  const iconSetHasGold = iconSet => {
    return iconSet.indexOf("gold") >= 0;
  };

  if (iconSetHasGold(iconSet.get())) {
    const goldCount = iconSet.icons.filter(res => res === RES.GOLD).length;

    iconSetWithGold.icons = iconSet.icons.reduce(
      (iconSet, resource) =>
        resource === iconSet[0] ? iconSet : [...iconSet, resource],
      [RES.GOLD]
    );

    const otherPropsWithGold = { ...otherProps, goldCount: goldCount };

    return iconSetWithGold.get().map((resourceName, idx) => {
      if (resourceName !== "gold") {
        return (
          <Resource
            key={uniquePrefix + "-" + idx}
            {...otherProps}
            resource={resourceName}
          />
        );
      } else {
        return (
          <Resource
            key={uniquePrefix + "-" + idx}
            {...otherPropsWithGold}
            resource={resourceName}
          />
        );
      }
    });
  }

  return iconSet.get().map((resourceName, idx) => {
    return (
      <Resource
        key={uniquePrefix + "-" + idx}
        resource={resourceName}
        {...otherProps}
      />
    );
  });
};
