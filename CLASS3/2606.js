// 바이러스
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const number_of_computers = +input[0]; // 컴퓨터의 수
const connected_numbers = +input[1]; // 연결된 수

class UndirectedGraph {
     /** 1부터 length까지 Node 생성 */
    constructor(length){
        this.graph = new Object();
        for(let i=1; i<=length; i++){
            this.graph[i] = new Array();
        }
    }
    
    /** Node간의 Edge을 연결 */
    connect(src_node, dest_node){
        this.graph[src_node].push(dest_node);
        this.graph[dest_node].push(src_node);
    }

    /** start_node로부터 갈 수 있는 모든 node을 return */
    findNodeInNetwork(start_node){
        let connected_nodes = [];
        let search_nodes = this.graph[start_node];
        const visited = new Array(this.graph.length).fill(false);
        
        while(search_nodes.length != 0){
            const dest_node = search_nodes.shift();

            if(!visited[dest_node-1]){ // 방문하지 않은 노드라면
                if(dest_node != start_node) connected_nodes.push(dest_node);
                visited[dest_node-1] = true;
                search_nodes = search_nodes.concat(this.graph[dest_node]);
            }
        }

        return connected_nodes;
    }
}

let network = new UndirectedGraph(number_of_computers);

for(let i=2; i<input.length; i++){
    const [src, dest] = input[i].split(' ').map(Number);
    network.connect(src, dest);
}

// console.log(network)
console.log(network.findNodeInNetwork('1').length);