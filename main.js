$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaTarefa = $('#endereco-nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(` 
            <div class="tarefa-finalizada" >
                <a>${enderecoNovaTarefa}
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-nova-tarefa').val('');
        
    $('.tarefa-finalizada').on('click', 'a', function() {
        $(this).toggleClass('completed');
    })
    })
})