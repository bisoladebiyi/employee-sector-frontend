import React from "react";

const SectorOptions = ({ sectors }) => {
  // logic to add whitespace to options based on hierachy 
  const whitespaces = (spacingCount) =>
    spacingCount === 0 ? "" : Array(spacingCount).fill("&nbsp;").join(" ");
  
  // get sectors with no parents 
  const parentSectors = sectors.filter((sector) => sector.parentID === null);

  // recursion function to loop through sectors and render in order
  const renderSector = (sector) => {
    const sectorChildren = sectors.filter((s) => s.parentID === sector.id);
    if (sectorChildren.length > 0) {
      return (
        <React.Fragment key={sector.id}>
          <option
            value={sector.id}
            disabled
            dangerouslySetInnerHTML={{
              __html: `${whitespaces(2 * sector.childLevel)} ${sector.name}`,
            }}
            className="capitalize"
          ></option>
          {sectorChildren.map(renderSector)}
        </React.Fragment>
      );
    } else {
      return (
        <option
          value={sector.id}
          key={sector.id}
          dangerouslySetInnerHTML={{
            __html: `${whitespaces(2 * sector.childLevel)} ${sector.name}`,
          }}
          className="capitalize"
        ></option>
      );
    }
  };

  return <React.Fragment>{parentSectors.map(renderSector)}</React.Fragment>;
};

export default SectorOptions;
