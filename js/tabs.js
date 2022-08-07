document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelectorAll(`[data-target="${path}"]`).forEach(item => item.classList.add('tab-content-active'))

        })

    })
})