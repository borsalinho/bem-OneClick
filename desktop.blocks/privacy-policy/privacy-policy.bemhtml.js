block('privacy-policy')(
    
    content()(function() {
            return [
                {
                    block:'modal',
                    mix:[
                        {block:'fade'},
                        {block:'bd-example-modal-lg'}
                    ],
                    attrs:{
                        tabindex:'-1',
                        role:'dialog',
                        'aria-labelledby':'myLargeModalLabel',
                        'aria-hidden':'true'
                    },
                    content:
                        {
                            block:'modal-dialog',
                            mix:[
                                {block:'modal-lg'}
                            ],
                            content:{
                                block:'modal-content',
                                content:{
                                    content:'...'
                                }
                            }
                        }
                }
                
            ];
    }),
); 