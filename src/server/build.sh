#!/bin/bash
set -e

# Build the Go application
GOOS=linux GOARCH=amd64 go build -o sbkashif mcode.go
