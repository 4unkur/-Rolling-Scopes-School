The application is launched using the command line(the order of the command line arguments does not matter):
	node my_ciphering_cli -c "A-R1-R0-C1-C0" -i "./input.txt" -o "./output.txt"
	node my_ciphering_cli -c "A-R1-R0-R1-C0" -i "./input.txt"	
	node my_ciphering_cli -c "A-R1-R0-R1-C0" -o "./output.txt"	
	node my_ciphering_cli -c "A-R1-R0-R1-C0"
	node my_ciphering_cli -i "./input.txt" -c "A-R1-R0-C1"
where:
	-c - flag for config argument
	-i - flag for input file
	-o - flag for output file	
NOTE:
	1. flag -c and its arguments are required
	2. if  the flags -i or -o is specified, the file must exist, otherwise an error will occur
	
	
	