function search() {
            const searchBar = document.getElementById('searchBar');
            const searchEngine = document.getElementById('searchEngine');
            const browserContent = document.getElementById('browserContent');

            const searchTerm = searchBar.value.trim();
            const engineUrl = searchEngine.value;

            if (searchTerm !== "") {
                const url = searchTerm.startsWith('http') ? searchTerm : `http://${searchTerm}`;
                 window.open(`${engineUrl}${encodeURIComponent(searchTerm)}`, '_blank');
            } else {
                browserContent.innerHTML = '<p>请输入您需要调用的cllo</p>';
            }
        }