*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#0f172a;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    min-height:100vh;
}

.container{
    width:90%;
    margin:auto;
    padding:20px;
}

h1{
    text-align:center;
    color:#38bdf8;
    margin-bottom:30px;
    font-size:40px;
}

.input-section{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
    margin-bottom:40px;
    flex-wrap:wrap;
}

input{
    padding:12px;
    width:350px;
    border:none;
    border-radius:8px;
    font-size:16px;
}

button{
    padding:12px 20px;
    border:none;
    border-radius:8px;
    background:#38bdf8;
    color:black;
    font-weight:bold;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    transform:scale(1.05);
}

#bars-container{
    height:400px;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    gap:10px;
    margin-bottom:50px;
    border:2px solid #334155;
    padding:20px;
    border-radius:12px;
    overflow-x:auto;
}

.bar{
    width:60px;
    background:#38bdf8;
    text-align:center;
    color:black;
    font-weight:bold;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    border-radius:6px 6px 0 0;
    transition:0.4s;
}

.info-section{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
}

.card{
    background:#1e293b;
    padding:20px;
    border-radius:12px;
}

.card h2{
    color:#38bdf8;
    margin-bottom:15px;
}

.card p,
.card li{
    line-height:1.8;
}

pre{
    background:black;
    padding:15px;
    border-radius:10px;
    overflow-x:auto;
    color:#38bdf8;
}
