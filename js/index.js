$(() => {

    $('.sectionHeader').each((index, element) => {
        $(element).on('click', () => {
            var parent = element.parentElement;
            var icon = $(element).find('.sectionIcon');
            var drawer = $(parent).find('.sectionInfo');
            ToggleDrawer(icon, drawer);
        });
    });

});

const ToggleDrawer = (iconElement, drawerElement) => {
    $(iconElement).toggleClass('minus');
    $(drawerElement).slideToggle();
}