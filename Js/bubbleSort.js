function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#D1A080");//Color change of selected on to compare

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#F53163");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#F53163");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#F53163");//Height update as they swapped value and we need to take time to swap them on screen
                div_update(divs[j+1],div_sizes[j+1], "#F53163");//Height update
            }
            div_update(divs[j],div_sizes[j], "#E5C2C1");//Update
        }
        div_update(divs[j],div_sizes[j], "#B7DCF4");//Final Color update of sorted element
    }
    div_update(divs[0],div_sizes[0], "#B7DCF4");//Color update

    enable_buttons(); //after sort calling enable to enable buttons
}