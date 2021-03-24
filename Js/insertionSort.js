function Insertion()
{
    c_delay=0;

    for(var j=1;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"#D1A080");

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#F53163");
            div_update(divs[i+1],div_sizes[i+1],"#F53163");

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#F53163");
            div_update(divs[i+1],div_sizes[i+1],"#F53163");
    
            div_update(divs[i],div_sizes[i],"#E5C2C1");
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#D1A080");
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#E5C2C1");
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#B7DCF4");
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#B7DCF4");

    enable_buttons();
}