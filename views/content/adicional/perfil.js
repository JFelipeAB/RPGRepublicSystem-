$(document).ready(function () {
    perfil.configFIcha();
});

var perfil = function () {

    var configFIcha = function () {
        $('#imgIcone').attr("src", usuario.icon);
        $('#lblLogin').text(usuario.login);
        $('#lblNivel').text("Nível " + usuario.nivel + " XP: ");
        $('#lblEmail').text("E-mail: " + usuario.eMail);
        $('#lblRank').text("Rank: " + usuario.acesso);
        let contador = 0;
        usuario.listaIten.forEach(iten => {
            debugger;
            switch (iten.tipo) {
                case 'icone':
                    $('#divIcones').append(' <img id="Icone' + contador + '" src="' + iten.descricao + '" width="200px">');
                    $("#divIcones").on("click", function () { perfil.selecionarItem(iten.tipo, contador) });
                    break;
                case 'FontFamily':
                    $('#divFontes').append('<div id="Icone' + contador + '">Fonte: ' + iten.descricao + '</div>');
                    $('#Icone' + contador).css("font-family", iten.descricao);
                    $("#divFontes").bind("click", function () { perfil.selecionarItem(iten.tipo, contador) });
                    break;
                case 'FontColor':
                    $('#divCorTexto').append('Cor de texto: ' + iten.descricao + ' <input disabled id="Icone' + contador + '" type="color" value="' + iten.cor + '">');
                    $("#divCorTexto").bind("click", function () { perfil.selecionarItem(iten.tipo, contador) });
                    break;
                case 'moeda':
                    break;
                default:
                    alert(`Erro, contate o administrador! tipo de item não cadastrado: ${iten.tipo}.`);
            };
            contador++;
        });
    };

    var selecionarItem = function (tipo, index) {
        debugger;
        if (!tipo) {
            alert(`Erro, contate o administrador! tipo de item não encontrado!`);
            return;
        }
        switch (tipo) {
            case 'icone':
                usuario.icone = usuario.listaIten[index].descricao
                $('#imgIcone').attr("src", usuario.icone);
                break;
            case 'FontFamily':
                console.log('mudar icone');
                break;
            case 'FontColor':
                console.log('mudar icone');
                break;
            case 'moeda':
                break;
            default:
                alert(`Erro, contate o administrador! tipo de item não cadastrado: ${iten.tipo}.`);
        };
    };

    return {
        configFIcha: configFIcha,
        selecionarItem: selecionarItem
    };

}();
