function convertToAdjList(adjMatrix) {
    var adjList = []; 

    for (var i = 0; i < adjMatrix.length; i++)
    {
        var row = adjMatrix[i]; 
        var tmp = []; 
        var j = 0; 
        
        while (j < row.length)
        {
            if (row[j] == 1)
            {
                tmp.push(j); 
            }
            j++; 
        }
        adjList[i] = tmp; 
    }
    return adjList;
}
