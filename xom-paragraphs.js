
$(document).ready(function()
{

    $('.rs').click(function() {
        topic = '#topic-' + $(this).data('ana')
        content = $(topic).html()
        title = $(topic + ' .topic-title').html()
        type = $(topic + ' .topic-type').html()
        desc = $(topic + ' .topic-description').html()
        link = $(topic + ' .topic-link').attr('href')
        $('#topic-box .modal-title').html(title + " (" + type + ")")
        $('#topic-box .modal-body').html(desc)
        $('#topic-box .multepal-link').attr('href', link) 
        $('#topic-box').trigger('focus')
    });


});