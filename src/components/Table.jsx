export default function Table({data, dispSum, filter}) {
    // dispSum - boolean to dislay sum for each region 
    // flag - toggle data to show
    // data - list of sales objects

    let displayData = [...data];

    if(filter) {
        const rFilter = filter.region;
        const mFilter = filter.model;
        if(rFilter !== "all"){
            displayData = displayData.filter((item) => item.region === rFilter);
        }

        if(mFilter !== "all"){
            displayData = displayData.filter((item) => item.model === mFilter);
        }
    }

    if(dispSum) {
        const map = new Map();
        displayData.forEach((item) => {
            const region = item.region;
            const sales = item.sales;
            if(map.has(region)){ 
                map.set(region, map.get(region) + sales);
            } else {
                map.set(region, sales);
            }
        });

        map.forEach((sum, region) => {
            const fIdx = displayData.findIndex((he) => he.region === region);
            displayData.splice(fIdx, 0, {
                region: region,
                model: "sum",
                sales: sum,
                });
            });
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Model</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData.map((item) => {
                        return (
                            <tr key={`${item.region}-${item.model}`}>
                                <td>{item.region}</td>
                                <td>{item.model}</td>
                                <td>{item.sales}</td>
                            </tr>
                        );
                })}
                </tbody>
            </table>
        );
}