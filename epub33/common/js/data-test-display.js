function data_test_display() {
    // 1. step: modify the test references to display only the test name, rather than the full URL
    const test_references = document.querySelectorAll('details.respec-tests-details a');
    for( const a of test_references ) {
        const href = a.href;
        // This is a bit of a hack, and fragile at that. It is based on the structure of the
        const test_reference = href.split('#')[1];
        // if the string contains a '.feature' then this is an epubcheck test reference
        if (test_reference.match(".feature")) {
            // Can be split further:
            a.textContent = test_reference.split('/')[1];
        } else {
            a.textContent = test_reference;
        }
    }
    
    /*
    // 2. step: find the sections that have tests associated to them; those are epubcheck tests. 
    // the child details element must be moved ahead (respec puts these at the very end of the element)
    const epubcheck_references = document.querySelectorAll('section[data-epubcheck="true"]');
    for (const section of epubcheck_references) {
        // This is the details element that must be moved
        const details = section.querySelector('details.respec-tests-details');
        // This is the element that surrounds the header in the generated code 
        const div_hx = section.firstChild;
        // Move the details element ahead, right after the section header
        section.insertBefore(details,div_hx.nextSibling);
    }
    */
}
