import { Pipe, PipeTransform } from "@angular/core";

// Pipe decorator allows the name of the pipe to be specified,
// the pipe name will be the name used in the template to apply
// the pipe
@Pipe({ name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

    // all pipes must implement this method
    // the first parameter is the value piped in
    // additional parameters can be specified for
    // colon delimited arguments which can be passed
    // into pipes
    public transform(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}