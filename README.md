## Flowchart

<br>

```mermaid
flowchart
    subgraph My App
    Home(((Home)))-->Review([Review])
    style Home fill: navy
    Home-->Edit([Edit])
    Home-->Help
    style Edit fill: darkgreen
    style Review fill: darkgreen
    style Help fill: purple
    Edit-->Submit[(Database)]
    style Submit fill: darkred
    Submit-->Review
    end


```