## Task 1: Caesar cipher CLI tool

Caesar cipher CLI tool is used for encrypting/decrypting data from files/console using Caesar cipher. Cipher uses a number called *shift*, meaning the position of symbol in alphabet, which will replace the original symbol relative to it to the left (if shift value is negative) or to the right (if shift value is positive). *Tool works only with Latin alphabet symbols.*

##### Installation:
*To use this tool you must have NodeJS v14.x.x installed.*

1. Clone/download the application from github repository;
2. Open terminal and move to repository folder;
3. Run `npm install` to install required dependencies.

##### Accepted parameters:
* `-s, --shift <size>` - value of shift size for cipher. Allowed values are positive/negative integers. **This parameter is required**.
* `-a, --action <type>` - type of action for cipher. Allowed values are *encode*/*decode*. **This parameter is required**.
* `-i, --input <file>` - file path to read data from. If omitted console input is used (*type Ctrl+C in terminal window to stop the program*).
* `-o, --output <file>` - file path write data to. If omitted console output is used.

###### *Note: Using `-i` and `-o` options with directories, non-accessible or non-existing files will lead to an error.*

##### Usage:

To encrypt data from file and save it to another file, create those files (*e.g. input.txt and output.txt*) and run the following command:

`$ node caesar-cli -s 7 -a encode -i "./input.txt" -o "./output.txt"`
> input.txt *`I will be encrypted over9999999 times with CAESAR CIPHER!`*

> output.txt *`P dpss il lujyfwalk vcly9999999 aptlz dpao JHLZHY JPWOLY!`*

If you want just to display encrypted data, you can omit the `-o` option:

`$ node caesar-cli -s 7 -a encode -i "./input.txt"`
> input.txt *`I will be encrypted over9999999 times with CAESAR CIPHER!`*

> `$`*`P dpss il lujyfwalk vcly9999999 aptlz dpao JHLZHY JPWOLY!`*

If you want to save to file the data you write to console, you can omit the `-i` option:

`$ node caesar-cli -s 7 -a encode -o "./output.txt"`
> `$`*`I will be encrypted over9999999 times with CAESAR CIPHER!`*

> output.txt *`P dpss il lujyfwalk vcly9999999 aptlz dpao JHLZHY JPWOLY!`*

Likewise, to decrypt the data use *decode* action:

`$ node caesar-cli -s 7 -a decode -i "./input.txt" -o "./output.txt"`
> input.txt *`P dpss il lujyfwalk vcly9999999 aptlz dpao JHLZHY JPWOLY!`*

> output.txt *`I will be encrypted over9999999 times with CAESAR CIPHER!`*