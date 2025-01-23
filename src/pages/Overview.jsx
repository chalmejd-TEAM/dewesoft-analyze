import React from "react";
import Formula from "../components/WeightedMean/Formula";

function Overview() {
  return (
    <>
    <h1>Overview</h1>
    <h2>Weighted Mean</h2>
    <hr></hr>
    
    <p>Used for calculation of equivalent load on a machine in fatigue and duty cycle analysis.</p>
    <Formula />
    <p>When running the program, select a .dxd file to load. This will then allow you to select a load channel and a cycle counter channel as well as list the exponents you wish to use. You can enter a list of exponents to use for the calculation as a comma separated list (i.e. 1, 2, 3, 4). Once you press submit the program will execute and return the calculate values in a table with their corresponding exponent.</p>
    <p>Common Exponents used for Equivalent life calculations</p>
    <ul>
    <li>Bearings:<ul>
    <li>3 (Cubic Mean): Ball Bearings</li>
    <li>3.33: Roller Bearings</li>
    </ul>
    </li>
    <li>Gears (spur and helical from ISO 6336-6):<ul>
    <li>Surface Pitting:<ul>
    <li>6.61: Case Carburized and Through Hardened</li>
    <li>5.709: Nitrided</li>
    <li>15.715: Nitro-carburized</li>
    </ul>
    </li>
    <li>Tooth Root:<ul>
    <li>8.738: Case Carburized</li>
    <li>6.225: Through Hardened</li>
    <li>17.035: Nitrided</li>
    <li>84.003: Nitro-carburized</li>
    </ul>
    </li>
    </ul>
    </li>
    </ul>
    <p><strong>Warning: Large data files can result in long processing times.</strong></p>

    <h2>Peak Locator</h2>
    <hr></hr>
    
    <p>Used to locate the peak load on a machine during ultimate strength testing.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus magni maiores illo id saepe expedita voluptate. 
        Ea voluptatum exercitationem reiciendis, temporibus iusto obcaecati ab minima tempora quos accusamus ut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus magni maiores illo id saepe expedita voluptate. 
        Ea voluptatum exercitationem reiciendis, temporibus iusto obcaecati ab minima tempora quos accusamus ut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus magni maiores illo id saepe expedita voluptate. 
        Ea voluptatum exercitationem reiciendis, temporibus iusto obcaecati ab minima tempora quos accusamus ut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus magni maiores illo id saepe expedita voluptate. 
        Ea voluptatum exercitationem reiciendis, temporibus iusto obcaecati ab minima tempora quos accusamus ut!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus magni maiores illo id saepe expedita voluptate. 
        Ea voluptatum exercitationem reiciendis, temporibus iusto obcaecati ab minima tempora quos accusamus ut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus magni maiores illo id saepe expedita voluptate. 
        Ea voluptatum exercitationem reiciendis, temporibus iusto obcaecati ab minima tempora quos accusamus ut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus magni maiores illo id saepe expedita voluptate. 
        Ea voluptatum exercitationem reiciendis, temporibus iusto obcaecati ab minima tempora quos accusamus ut!</p>
</>
  );
}

export default Overview;
