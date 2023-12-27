$(function () {
    $("#datepicker").datepicker({
        prevText: "Tháng trước",
        nextText: "Tháng sau",
        dateFormat: "dd-mm-yy",
        monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
            "Tháng 5", "Tháng 6", "THáng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        dayNamesMin: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
        duration: "slow",
        minDate: new Date()
    });

    $('#from').select2();
    $('#to').select2();

    $(document).on('click', '.item_center', function () {
        let di = $('.select_di').val();
        let ve = $('.select_ve').val();

        // Swap values of select_di and select_ve
        if (di || ve) {
            $('.select_di').val(ve);
            $('.select_ve').val(di);

            // Trigger change event on select_di and select_ve
            $('.select_di, .select_ve').trigger('change');

            // Get the current rotation or initialize it to 0
            let currentRotation = $(this).data('rotation') || 0;

            // Calculate the new rotation (e.g., add 180 degrees)
            let newRotation = currentRotation + 180;

            // Set the data attribute for the new rotation
            $(this).data('rotation', newRotation);

            // Reset rotation to the current rotation before starting a new animation
            $(this).css('transform', 'rotate(' + currentRotation + 'deg)');

            // Start the rotation animation
            $(this).animate({ rotation: newRotation }, {
                duration: 500,
                step: function (now, fx) {
                    // Rotate the element during the animation
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                }
            });
        }
    });
});
